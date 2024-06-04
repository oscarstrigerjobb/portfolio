// src/services/emailService.js
export const sendEmail = async (emailData) => {//skickar ett POST-anrop till http://localhost:5000/send-email med e-postdata i JSON-format
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {// Kontrollerar om svarskoden från servern inte är ok, och följer upp med error om så skulle vara fallet
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to send email');
    }

    return response.json();
  };
