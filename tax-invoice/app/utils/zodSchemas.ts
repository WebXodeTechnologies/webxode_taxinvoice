import {z} from "zod"
export const onboardingSchema = z.object({
    firstName: z.string().min(2, "First Name is Required"),
    lastName: z.string().min(2,"Last Name is Required"),
    address: z.string().min(2, "Address is Required"),
})


export const invoiceSchema = z.object({
    invoiceName: z.string().min(1, "Invoice Name is Required"),
    total :z.number().min(1, "1$ is Minimum"),
    status: z.enum(["PAID","PENDING"]).default("PENDING"),
    date:z.string().min(1,"Date is Required"),
    dueDate:z.number().min(1,"Date is Required"),
    fromName:z.string().min(1,"Name is Required"),
    fromEmail:z.string().email("Invalid EmailAddress"),
    formAddress:z.string().min(1,"Your Address is Required"),
    clientName:z.string().min(1,"Client Name is Required"),
    clientEmail:z.string().email("Invalid Client Email is Required"),
    clientAddress:z.string().min(1,"ClientAddress is Required"),
    currency:z.string().min(1,"Curreny is Required"),
    invoiceNumber:z.number().min(1,"Minimum Invoice number is 1"),
    note:z.string().optional(),
    invoiceItemDescription:z.string().min(1,"Description is Required"),
    invoiceItemQuantity:z.string().min(1,"Minimum Qunatity is 1"),
    invoiceItemRate:z.number().min(1,"Rate min 1"),
})