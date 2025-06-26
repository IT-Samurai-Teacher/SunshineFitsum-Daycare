# Email Setup for Sunshine Fitsum Daycare Website

This document explains how to set up email functionality for the contact and enrollment forms on the Sunshine Fitsum Daycare website.

## Prerequisites

1. A Google Workspace account (fitsum@sunshinefitsumdaycare.com)
2. Two-factor authentication (2FA) enabled on your Google account
3. An App Password generated for the website

## Generating an App Password

1. Go to your [Google Account Security settings](https://myaccount.google.com/security)
2. Make sure 2-Step Verification is enabled
3. Scroll down to "App passwords" (under "Signing in to Google")
4. Select "Mail" as the app and "Other" as the device
5. Enter "Sunshine Daycare Website" as the name
6. Click "Generate"
7. Copy the 16-character password that appears (without spaces)

## Setting Up Environment Variables

### For Local Development

1. Create a `.env.local` file in the root of your project
2. Copy the contents from `.env.local.example`
3. Replace the placeholder values with your actual credentials:
   \`\`\`
   EMAIL_USER=fitsum@sunshinefitsumdaycare.com
   EMAIL_APP_PASSWORD=your16charpassword
   SEND_CONFIRMATION=true
   \`\`\`

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following environment variables:
   - `EMAIL_USER`: fitsum@sunshinefitsumdaycare.com
   - `EMAIL_APP_PASSWORD`: xuvhkwmlgrhhmbsn
   - `SEND_CONFIRMATION`: true

## Troubleshooting

If emails are not being sent:

1. **Check your App Password**: Make sure you've entered the correct App Password without spaces
2. **Check SMTP settings**: Verify that the SMTP configuration in the code is correct
3. **Check logs**: Look at the Vercel logs for any error messages
4. **Test locally**: Test the email functionality locally before deploying

## Security Notes

- Never commit your `.env.local` file to version control
- Regularly rotate your App Password for security
- Consider implementing rate limiting to prevent abuse of the email forms

## Gmail SMTP Settings Reference

- **Host**: smtp.gmail.com
- **Port**: 465
- **Secure**: true (use SSL)
- **Auth**: Username and App Password

For more information, see [Using Google SMTP with Supabase Custom SMTP](https://supabase.com/docs/guides/troubleshooting/using-google-smtp-with-supabase-custom-smtp-ZZzU4Y) [^3].
