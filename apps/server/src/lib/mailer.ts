import * as nodeMailer from 'nodemailer';
import path from 'path';
import * as Sentry from '@sentry/node';
import { promises as fs } from 'fs';
import { htmlToText } from 'html-to-text';
import handlebars from 'handlebars';
import sgMail from '@sendgrid/mail';

import { IS_PRODUCTION, EMAIL_OPTIONS, SENDGRID_API_KEY } from './config';

if (IS_PRODUCTION) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

interface MailArgs {
  templateId: string;
  to: string[] | string;
  dynamic_template_data: Record<string, unknown>;
}

export class Mailer {
  private readonly from = 'Boilerplate <test@test.com>';

  async send(args: MailArgs, subject: string) {
    try {
      if (IS_PRODUCTION) {
        await sgMail.send({
          from: this.from,
          subject,
          ...args,
        });
      } else {
        await this.sendDev(args, subject);
      }
    } catch (error) {
      Sentry.captureException(error);
    }
  }

  // Dev
  async sendDev(args: MailArgs, subject: string) {
    const transport = nodeMailer.createTransport(EMAIL_OPTIONS);
    const source = await fs.readFile(
      path.join(__dirname, `/../templates/${args.templateId}.hbs`),
      'utf-8'
    );

    const template = handlebars.compile(source)(args.dynamic_template_data);

    transport.sendMail({
      from: this.from,
      to: args.to,
      subject,
      html: template,
      text: htmlToText(template),
    });
  }
}
