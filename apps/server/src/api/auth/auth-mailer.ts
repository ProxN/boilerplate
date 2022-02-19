import { Service } from 'typedi';

import { Mailer } from '../../lib/mailer';
import { IS_PRODUCTION, WEB_URL } from '../../lib/config';

@Service()
export class AuthMailer extends Mailer {
  async sendResetPassword(email: string, token: string) {
    if (!email) return;
    try {
      const data = {
        templateId: IS_PRODUCTION
          ? 'd-2bfbcd779152480e9990de5cc1732b74'
          : 'reset_password',
        to: email,
        dynamic_template_data: {
          url: `${WEB_URL}/reset_password/${token}`,
        },
      };
      await this.send(data, 'Reset your password!');
    } catch (error) {
      console.log(error);
    }
  }
}
