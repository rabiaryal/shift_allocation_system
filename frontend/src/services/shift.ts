export interface Department {
    id: string;
    name: string;
  }
  
  export interface Shift {
    id: string;
    employee_id: string;
    department_id: string;
    frequency: 'weekly' | 'monthly';
    shift_timing: string;
    status: 'active' | 'pending_swap';
  }
  
  export interface ShiftSwapRequest {
    id: string;
    shift_id: string;
    requested_by: string;
    status: 'pending' | 'approved' | 'rejected';
  }