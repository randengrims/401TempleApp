// Define the interface for an Appointment
export interface Appointment {
    appointmentID: number;
    time: string;  // Format as 'HH:mm' (e.g., '14:30')
    date: string;  // Format as 'YYYY-MM-DD' (e.g., '2025-03-28')
    templeName: string; // Name of the temple
    username: string; // Username of the person who scheduled the appointment
}
