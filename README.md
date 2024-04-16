# Next Blog

### Requirements

The task was to convert the provided design into a portfolio app with a blog and authentication.

- The design should be adaptive and responsive following mobile layers in Figma
- The app should have an authentication by credentials and some protected routes
- The app should be optimized for SEO

Design: [Figma](https://www.figma.com/file/gmYHDhmGSwk4u9oojwyYh8/John-%2B?type=design&node-id=0%3A1&mode=dev&t=Y0mRqD3zcqrl9Ezc-1)

### Tech Stack

- `Next ^14.1`: best choice for SSR, which also makes it great for SEO;
- `TypeScript ^5`: because we need type safety during development;
- As for the authentication process - I chose `Clerk ^4.29` as a straightforward way to implement authentication. I also made possible authentication with OpenID (Google, GitHub providers).
- The Contact page was missing from the design, so I took over the initiative to create a simple contact form with `emailjs ^4` and `react-tostify` to make it functional.

### Installation and setup

1. Make sure you have Node.js and npm installed.
2. Clone the project repository:

```bash
git clone https://github.com/hifly3082/next-blog.git
cd to-do-app
```

3. Navigate to the project's root directory.
4. Install the dependencies using the following command:

```bash
npm install
```

### Usage

To run the application, use the following command:

```bash
npm run dev
```




