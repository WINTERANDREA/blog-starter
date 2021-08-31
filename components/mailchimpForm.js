import { useState } from 'react';
import { decode } from 'html-entities';

const MailchimpForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Per favore inserisci un indirizzo email valido' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="flex align-center pb-6 gap-1">
        <div className="w-auto">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Email"
            className="bg-ethereumLightGray appearance-none rounded w-full py-2 px-4 text-ethereumGray leading-tight focus:outline-none focus:bg-white focus:border-none"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="">
          <button  onClick={handleFormSubmit} className="shadow bg-black  hover:bg-ethereumGold hover:text-white focus:shadow-outline focus:outline-none text-white font-bold py-1.5 px-4 rounded">
            Iscriviti
          </button>
        </div>
      </div>
      <div className="text-ethereumGold">
        {status === "sending" && <div>Email in uscita...</div>}
        {status === "error" || error ? (
          <div
            dangerouslySetInnerHTML={{ __html: error || getMessage( message) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode("Grazie per esserti iscritto!") }} />
        )}
      </div>
    </>
  );
}

export default MailchimpForm