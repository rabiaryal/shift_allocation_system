import React, { useState } from "react";
import type {
	Department,
	Shift,
	ShiftSwapRequest,
} from "../services/shift";
import NotificationPanel from "../shared/notificationpanel"; // Import NotificationPanel
import Button from "../shared/Button"; // Import the reusable Button component

const mockDepartments: Department[] = [
	{ id: "1", name: "HR" },
	{ id: "2", name: "Engineering" },
	{ id: "3", name: "Sales" },
];

const mockShifts: Shift[] = [
	{
		id: "1",
		employee_id: "emp1",
		department_id: "1",
		frequency: "weekly",
		shift_timing: "9 AM - 5 PM",
		status: "active",
	},
	{
		id: "2",
		employee_id: "emp2",
		department_id: "2",
		frequency: "monthly",
		shift_timing: "10 AM - 6 PM",
		status: "pending_swap",
	},
];

const mockShiftSwapRequests: ShiftSwapRequest[] = [
	{
		id: "1",
		shift_id: "1",
		requested_by: "emp2",
		status: "pending",
	},
];

const ShiftForm: React.FC = () => {
	const [departments, setDepartments] =
		useState<Department[]>(mockDepartments);
	const [formData, setFormData] = useState({
		frequency: "weekly",
		shiftTiming: "",
		departmentId: "",
	});

	const [shifts, setShifts] = useState<Shift[]>(mockShifts);
	const [shiftSwapRequests, setShiftSwapRequests] =
		useState<ShiftSwapRequest[]>(mockShiftSwapRequests);

	// State for Notification
	const [notification, setNotification] = useState<{
		message: string;
		color: string;
	} | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newShift: Shift = {
			id: `${shifts.length + 1}`,
			employee_id: "emp1",
			department_id: formData.departmentId,
			frequency: formData.frequency as "weekly" | "monthly",
			shift_timing: formData.shiftTiming,
			status: "active",
		};
		setShifts([...shifts, newShift]);
		setFormData({
			frequency: "weekly",
			shiftTiming: "",
			departmentId: "",
		});

		// Show notification for shift generation
		setNotification({
			message: "Shift Generated Successfully!",
			color: "green",
		});
		setTimeout(() => setNotification(null), 3000); // Auto-hide notification after 3 seconds
	};

	const handleSwapRequest = () => {
		const newSwapRequest: ShiftSwapRequest = {
			id: `${shiftSwapRequests.length + 1}`,
			shift_id: "1",
			requested_by: "emp1",
			status: "pending",
		};
		setShiftSwapRequests([
			...shiftSwapRequests,
			newSwapRequest,
		]);

		// Show notification for shift swap
		setNotification({
			message: "Shift Swap Requested Successfully!",
			color: "blue",
		});
		setTimeout(() => setNotification(null), 3000); // Auto-hide notification after 3 seconds
	};

	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6">
				Shift Management
			</h2>

			{/* Notification Panel */}
			{notification && (
				<NotificationPanel
					color={notification.color}
					text={notification.message}
					textColor="white"
				/>
			)}

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Frequency
					</label>
					<select
						value={formData.frequency}
						onChange={(e) =>
							setFormData({
								...formData,
								frequency: e.target.value,
							})
						}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
					>
						<option value="weekly">Weekly</option>
						<option value="monthly">Monthly</option>
					</select>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Shift Timing
					</label>
					<input
						type="text"
						value={formData.shiftTiming}
						onChange={(e) =>
							setFormData({
								...formData,
								shiftTiming: e.target.value,
							})
						}
						placeholder="e.g., 9 AM - 5 PM"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Department
					</label>
					<select
						value={formData.departmentId}
						onChange={(e) =>
							setFormData({
								...formData,
								departmentId: e.target.value,
							})
						}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
					>
						<option value="">Select Department</option>
						{departments.map((dept) => (
							<option key={dept.id} value={dept.id}>
								{dept.name}
							</option>
						))}
					</select>
				</div>
				<div className="flex space-x-4">
					<Button type="submit" variant="primary" fullWidth>
						Generate Shift
					</Button>
					<Button
						type="button"
						variant="secondary"
						onClick={() => console.log(shifts)}
						fullWidth
					>
						View Shifts
					</Button>
				</div>
				<Button
					type="button"
					variant="success"
					onClick={handleSwapRequest}
					fullWidth
				>
					Request Shift Swap
				</Button>
			</form>
		</div>
	);
};

export default ShiftForm;

// import React, { useState, useEffect } from 'react';
// import type { Department, Shift, ShiftSwapRequest } from '../services/shift';

// const mockDepartments: Department[] = [
//   { id: '1', name: 'HR' },
//   { id: '2', name: 'Engineering' },
//   { id: '3', name: 'Sales' },
// ];

// const mockShifts: Shift[] = [
//   { id: '1', employee_id: 'emp1', department_id: '1', frequency: 'weekly', shift_timing: '9 AM - 5 PM', status: 'active' },
//   { id: '2', employee_id: 'emp2', department_id: '2', frequency: 'monthly', shift_timing: '10 AM - 6 PM', status: 'pending_swap' },

// ];

// const mockShiftSwapRequests: ShiftSwapRequest[] = [
//   { id: '1', shift_id: '1', requested_by: 'emp2', status: 'pending' },
// ];

// const ShiftForm: React.FC = () => {
//   const [departments, setDepartments] = useState<Department[]>(mockDepartments);
//   const [formData, setFormData] = useState({
//     frequency: 'weekly',
//     shiftTiming: '',
//     departmentId: '',
//   });

//   const [shifts, setShifts] = useState<Shift[]>(mockShifts);
//   const [shiftSwapRequests, setShiftSwapRequests] = useState<ShiftSwapRequest[]>(mockShiftSwapRequests);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newShift: Shift = {
//       id: `${shifts.length + 1}`,
//       employee_id: 'emp1',
//       department_id: formData.departmentId,
//       frequency: formData.frequency as 'weekly' | 'monthly',
//       shift_timing: formData.shiftTiming,
//       status: 'active',
//     };
//     setShifts([...shifts, newShift]);
//     setFormData({ frequency: 'weekly', shiftTiming: '', departmentId: '' });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Shift Management</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Frequency</label>
//           <select
//             value={formData.frequency}
//             onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           >
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Shift Timing</label>
//           <input
//             type="text"
//             value={formData.shiftTiming}
//             onChange={(e) => setFormData({ ...formData, shiftTiming: e.target.value })}
//             placeholder="e.g., 9 AM - 5 PM"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Department</label>
//           <select
//             value={formData.departmentId}
//             onChange={(e) => setFormData({ ...formData, departmentId: e.target.value })}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           >
//             <option value="">Select Department</option>
//             {departments.map((dept) => (
//               <option key={dept.id} value={dept.id}>{dept.name}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex space-x-4">
//           <button
//             type="submit"
//             className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Generate Shift
//           </button>
//           <button
//             type="button"
//             onClick={() => console.log(shifts)}
//             className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//           >
//             View Shifts
//           </button>
//         </div>
//         <button
//           type="button"
//           onClick={() => console.log(shiftSwapRequests)}
//           className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//         >
//           Request Shift Swap
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ShiftForm;
