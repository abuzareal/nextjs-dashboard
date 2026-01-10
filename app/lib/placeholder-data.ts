import { User, Customer, Invoice, Revenue } from "./definitions";

export const users: User[] = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    name: "Alice Doe",
    email: "alice@example.com",
    password: "password123",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    name: "Bob Smith",
    email: "bob@example.com",
    password: "password123",
  },
];

export const customers: Customer[] = [
  {
    id: "c1111111-1111-1111-1111-111111111111",
    name: "Acme Corp",
    email: "contact@acme.com",
    image_url: "/customers/acme.png",
  },
  {
    id: "c2222222-2222-2222-2222-222222222222",
    name: "Beta LLC",
    email: "hello@beta.com",
    image_url: "/customers/beta.png",
  },
];

export const invoices: Invoice[] = [
  {
    id: "i1111111-1111-1111-1111-111111111111",
    customer_id: customers[0].id,
    amount: 120000, // cents ($1,200.00)
    date: "2024-12-01",
    status: "paid",
  },
  {
    id: "i2222222-2222-2222-2222-222222222222",
    customer_id: customers[1].id,
    amount: 45000, // cents ($450.00)
    date: "2024-12-10",
    status: "pending",
  },
];

export const revenue: Revenue[] = [
  { month: "Jan", revenue: 500000 },
  { month: "Feb", revenue: 420000 },
  { month: "Mar", revenue: 610000 },
  { month: "Apr", revenue: 380000 },
  { month: "May", revenue: 450000 },
  { month: "Jun", revenue: 520000 },
];
