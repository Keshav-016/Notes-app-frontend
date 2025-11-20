# Notes App (Frontend)

This is a modern notes application built with [Next.js](https://nextjs.org), [React](https://react.dev), [Apollo Client](https://www.apollographql.com/docs/react/), and [Tailwind CSS](https://tailwindcss.com/). It allows users to create, view, and manage notes, including marking important notes and user authentication.

**Backend:** The backend is a separate NestJS project (see `notes_backed_nest` folder).

---

## Features

- User authentication (login/register)
- Create, edit, and delete notes
- Mark notes as important
- View all notes or only important notes
- Profile image upload
- Responsive UI with Tailwind CSS & MUI
- Form validation with Yup & React Hook Form
- GraphQL API integration via Apollo Client

## Tech Stack

- Next.js 15
- React 19
- Apollo Client
- GraphQL
- Tailwind CSS
- MUI (Material UI)
- React Hook Form & Yup

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set environment variables:**

   - Create a `.env.local` file and set `NEXT_PUBLIC_APP_BASE_URL` to your backend GraphQL endpoint.

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
notes-app-frontend(next)/
├── src/
│   ├── app/
│   │   ├── components/        # UI components (NoteCard, NoteList, Navbar, etc.)
│   │   ├── context/           # React Contexts (User, Notes)
│   │   ├── graphql/           # GraphQL queries & mutations
│   │   ├── lib/               # Apollo Client setup & error handling
│   │   ├── config/            # App messages
│   │   ├── Validators/        # Yup validation schemas
│   │   ├── Types/             # TypeScript types
│   │   ├── importantNotes/    # Important notes page
│   │   ├── globals.css        # Global styles
│   │   └── page.tsx           # Main page
│   └── assets/                # Images
├── public/                    # Static assets
├── package.json               # Project metadata & scripts
├── tailwind.config.ts         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
└── README.md                  # Project documentation
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code
- `npm run codegen` — Generate GraphQL types

## Contributing

Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

## License

This project is licensed under the MIT License.
