
from pyomo.environ import ConcreteModel, Var, Objective, Constraint, SolverFactory, NonNegativeReals, Binary, summation

# Sample Data
employees = {
    "E1": "Cashier",
    "E2": "Inventory Manager",
    "E3": "Customer Help",
    "E4": "Cleaning Staff"
}

shifts = {
    "Shift1": {"Designation": "Cashier", "WorkHours": 8, "EmployeesRequired": 2},
    "Shift2": {"Designation": "Inventory Manager", "WorkHours": 8, "EmployeesRequired": 1},
    "Shift3": {"Designation": "Customer Help", "WorkHours": 8, "EmployeesRequired": 2},
    "Shift4": {"Designation": "Cleaning Staff", "WorkHours": 8, "EmployeesRequired": 1}
}

max_hours = {"E1": 36, "E2": 28, "E3": 42, "E4": 21}

# Model
model = ConcreteModel()

# Sets
model.Employees = employees.keys()
model.Shifts = shifts.keys()

# Parameters
model.WorkHours = {s: shifts[s]["WorkHours"] for s in shifts}
model.MaxHours = max_hours
model.EmployeesRequired = {s: shifts[s]["EmployeesRequired"] for s in shifts}
model.Designations = {e: employees[e] for e in employees}

# Decision Variables: Binary variables for employee-shift assignment
model.x = Var(model.Employees, model.Shifts, domain=Binary)

# Objective: Minimize idle hours
def objective_rule(model):
    return sum(
        model.MaxHours[e] - sum(model.WorkHours[s] * model.x[e, s] for s in model.Shifts)
        for e in model.Employees
    )

model.Objective = Objective(rule=objective_rule, sense=1)

# Constraints
# 1. Maximum hours constraint
def max_hours_constraint(model, e):
    return sum(model.WorkHours[s] * model.x[e, s] for s in model.Shifts) <= model.MaxHours[e]

model.MaxHoursConstraint = Constraint(model.Employees, rule=max_hours_constraint)

# 2. Shift coverage constraint
def shift_coverage_constraint(model, s):
    return sum(model.x[e, s] for e in model.Employees if model.Designations[e] == shifts[s]["Designation"]) == model.EmployeesRequired[s]

model.ShiftCoverageConstraint = Constraint(model.Shifts, rule=shift_coverage_constraint)

# 3. Designation matching constraint
def designation_constraint(model, e, s):
    if model.Designations[e] != shifts[s]["Designation"]:
        return model.x[e, s] == 0
    return Constraint.Skip

model.DesignationConstraint = Constraint(model.Employees, model.Shifts, rule=designation_constraint)

# Solve the model
solver = SolverFactory("glpk")  # You can use "cbc", "glpk", or any other solver installed
solver.solve(model)

# Output the results
schedule = []
for e in model.Employees:
    for s in model.Shifts:
        if model.x[e, s].value == 1:
            schedule.append({"Employee": e, "Shift": s, "Designation": employees[e]})

# Print the schedule
for entry in schedule:
    print(f"Employee {entry['Employee']} ({entry['Designation']}) is assigned to {entry['Shift']}")
