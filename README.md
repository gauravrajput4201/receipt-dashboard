# receipt-dashboard

## Installation

Follow the steps below to set up the project on your local machine:

```bash
 git clone <repository-url>
cd <repository-folder>
```

## Install Dependencies

Run the following command to install all necessary dependencies:

    npm install

## Run the Application

    npm run dev

## Technology Stack

**Frontend Framework:** React.js for building dynamic and interactive user interfaces..

**Styling:** Tailwind CSS for utility-first styling.

**Validation:** Zod for schema-based validation of user inputs.

**UI Components:** ShadCN for pre-designed, customizable UI components.

**State Management:** Redux for robust and scalable state management.

## Frontend Architecture

**React Router Pages and Routing**

- Implemented with React Router for seamless navigation.

**Reusable Components**

ShadCN components are used for buttons, forms, modals, etc., styled with Tailwind CSS for consistency.

**State Management with Redux Toolkit**

Redux Toolkit provides a robust and scalable solution for managing application state efficiently with minimal boilerplate

- Centralized store for managing filters, search queries, and job application states.

- Enhances performance with built-in middleware and devtools integration.

**Form Handling and Validation**

- Forms are validated using Zod for type-safe and schema-driven validations.

**UI Design with ShadCN and Tailwind CSS**

- ShadCN Components: Modular UI elements like buttons, inputs, modals, and dropdowns.

- Tailwind CSS Integration: Customizes ShadCN components with utility-first styling for responsiveness.

## Workflow

**Authentication**

**NOTE :-** Users can log in directly using any valid email and password, as this is a static login system.

The application includes the following authentication methods

- **Static Login:** Users can log in using a static email and password for development purposes.

**User Interaction**

- The user visits the dashboard to generate and modify bills.
- Filters and search functionality are managed using Zustand for global state.

**Server-Side Data Fetching**

- Next.js fetches jobs from the database using server-side rendering

**Validation and Application Submission**

- Zod validates application forms before sending data

## Support

For questions or support, feel free to reach out at [singhkumargaurav420@gmail.com].
