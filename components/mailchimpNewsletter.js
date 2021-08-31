import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailchimpForm from '../components/mailchimpForm';

const MailchimpNewsletter = () => {

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <MailchimpForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default MailchimpNewsletter;