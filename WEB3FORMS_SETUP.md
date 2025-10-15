# Web3Forms Setup Guide

## Contact Form Integration

Your contact page is now integrated with Web3Forms for email handling. Follow these steps to complete the setup:

## Step 1: Get Your Access Key

1. Visit [Web3Forms.com](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form
4. Copy your access key

## Step 2: Configure the Access Key

1. Open `src/app/contact/page.tsx`
2. Find this line (around line 75):
   ```typescript
   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
   ```
3. Replace `"YOUR_ACCESS_KEY_HERE"` with your actual access key from Web3Forms

## Step 3: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the form submission

## Features Included

✅ **Form Validation**: Required fields for name, email, and message  
✅ **Loading States**: Shows spinner while submitting  
✅ **Success Messages**: Confirms when message is sent  
✅ **Error Handling**: Shows error messages if submission fails  
✅ **Auto-reset**: Form clears after successful submission  
✅ **Hidden Fields**: Subject and from_name are pre-filled  

## Form Fields

The form captures:
- **Name** (required)
- **Email** (required) 
- **Phone** (optional)
- **Property Interest** (optional)
- **Message** (required)

## Email Template

Emails will include:
- Subject: "New Contact Form Submission from PropPriyansh Website"
- From: "PropPriyansh Website"
- All form data in a formatted structure

## Environment Variables (Optional)

For production, consider using environment variables:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

2. Update the code to use:
   ```typescript
   formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);
   ```

## Troubleshooting

- **Form not submitting**: Check your access key is correct
- **Not receiving emails**: Check your spam folder
- **Validation errors**: Ensure required fields are filled
- **Network errors**: Check your internet connection

## Support

- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: https://web3forms.com/help