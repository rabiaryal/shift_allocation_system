export const mockDepartments = [
    { id: '1', name: 'HR' },
    { id: '2', name: 'Engineering' },
    { id: '3', name: 'Sales' },
  ];
  
  export const mockShifts = [
    { id: '1', employee_id: 'emp1', department_id: '1', frequency: 'weekly', shift_timing: '9 AM - 5 PM', status: 'active' },
    { id: '2', employee_id: 'emp2', department_id: '2', frequency: 'monthly', shift_timing: '10 AM - 6 PM', status: 'pending_swap' },
  ];
  
  export const mockShiftSwapRequests = [
    { id: '1', shift_id: '1', requested_by: 'emp2', status: 'pending' },
  ];