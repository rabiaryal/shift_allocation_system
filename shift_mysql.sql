create database shift_allocation;
use shift_allocation;
create table hr_manager(
	id integer primary key,
    pass varchar(50),
    name varchar(50)
    );
create table shift(
	shift_id integer primary key,
    shift_duration integer,
    shift_timing varchar(50),
    shift_day varchar(50),
    shift_priority integer
    );
create table employee(
	e_id integer primary key,
    e_name varchar(50),
    no_of_hours_worked integer,
    designation varchar(50),
    e_email varchar(100)
    );
select * from employee;
insert into employee values
	(1, 'shashank', 3,  'cashier', 'sadjaksnd'),
    (2, 'bisswa', 4, 'sweeper', 'sadjaksnd'),
    (3, 'rabi', 7, 'janitor', 'sadjaksnd')
create database shift_allocation;
use shift_allocation;
create table hr_manager(
	id integer primary key,
    pass varchar(50),
    name varchar(50)
    );
create table shift(
	shift_id integer primary key,
    shift_duration integer,
    shift_timing varchar(50),
    shift_day varchar(50),
    shift_priority integer
    );
create table employee(
	e_id integer primary key,
    e_name varchar(50),
    no_of_hours_worked integer,
    designation varchar(50),
    e_email varchar(100)
    );
select * from employee;
insert into employee values
	(1, 'shashank', 3,  'cashier', 'sadjaksnd'),
    (2, 'bisswa', 4, 'sweeper', 'sadjaksnd'),
    (3, 'rabi', 7, 'janitor', 'sadjaksnd'),
    (4, 'Bob Williams', 20, 'Clerk', 'bob.w@google.com'),
	(5, 'Sarah Lee', 45, 'Supervisor', 'sarah.lee@google.com'),
	(6, 'Tom Davis', 38, 'Technician', 'tom.d@google.com'),
	(7, 'Emily Clark', 50, 'Senior Engineer', 'emily.c@google.com'),
	(8, 'Michael Brown', 25, 'Junior Engineer', 'michael.b@google.com'),
	(9, 'Olivia Taylor', 32, 'Support Staff', 'olivia.t@google.com'),
	(10, 'Daniel Harris', 42, 'Project Manager', 'daniel.h@google.com')
    (11, 'Kevin Brooks', 36, 'Software Engineer', 'kevin.brooks@google.com'),
    (12, 'Laura Hall', 29, 'Marketing Specialist', 'laura.hall@google.com'),
    (13, 'Michael Evans', 50, 'Technical Lead', 'michael.evans@google.com'),
    (14, 'Natalie Reed', 28, 'Software Engineer', 'natalie.reed@google.com'),
(15, 'Oscar Perry', 43, 'Product Manager', 'oscar.perry@google.com'),
(16, 'Paula James', 33, 'Sales Manager', 'paula.james@google.com'),
(17, 'Quincy Rogers', 48, 'Support Engineer', 'quincy.rogers@google.com'),
(18, 'Rachel Clark', 31, 'Software Engineer', 'rachel.clark@google.com'),
(19, 'Steven Diaz', 34, 'Network Administrator', 'steven.diaz@google.com'),
(20, 'Tina Morris', 32, 'HR Specialist', 'tina.morris@google.com'),
(21, 'Ursula Nelson', 46, 'Software Engineer', 'ursula.nelson@google.com'),
(22, 'Victor Adams', 47, 'Security Analyst', 'victor.adams@google.com'),
(23, 'Wendy Baker', 27, 'Software Engineer', 'wendy.baker@google.com'),
(24, 'Xander Wright', 49, 'Database Administrator', 'xander.wright@google.com'),
(25, 'Yara Collins', 25, 'Intern', 'yara.collins@google.com'),
(26, 'Zane Foster', 26, 'Intern', 'zane.foster@google.com'),
(27, 'Aiden Clark', 38, 'Software Engineer', 'aiden.clark@google.com'),
(28, 'Bella Foster', 42, 'Marketing Manager', 'bella.foster@google.com'),
(29, 'Carter Harris', 40, 'QA Engineer', 'carter.harris@google.com'),
(30, 'Diana Green', 36, 'Data Scientist', 'diana.green@google.com'),
(31, 'Ethan Young', 44, 'Product Manager', 'ethan.young@google.com'),
(32, 'Fiona Scott', 31, 'DevOps Engineer', 'fiona.scott@google.com'),
(33, 'George Adams', 29, 'Software Engineer', 'george.adams@google.com'),
(34, 'Holly Brooks', 35, 'HR Manager', 'holly.brooks@google.com'),
(35, 'Isaac Wright', 37, 'Network Administrator', 'isaac.wright@google.com'),
(36, 'Jessica Perry', 41, 'Technical Lead', 'jessica.perry@google.com'),
(37, 'Kyle Diaz', 33, 'Software Engineer', 'kyle.diaz@google.com'),
(38, 'Liam Nelson', 39, 'Business Analyst', 'liam.nelson@google.com'),
(39, 'Maya James', 34, 'Support Engineer', 'maya.james@google.com'),
(40, 'Noah Smith', 48, 'Security Analyst', 'noah.smith@google.com'),
(41, 'Olivia Lee', 27, 'UI/UX Designer', 'olivia.lee@google.com'),
(42, 'Patrick Hall', 45, 'Database Administrator', 'patrick.hall@google.com'),
(43, 'Quinn Evans', 32, 'Marketing Specialist', 'quinn.evans@google.com'),
(44, 'Rebecca Clark', 30, 'Sales Manager', 'rebecca.clark@google.com'),
(45, 'Samuel Baker', 43, 'Project Manager', 'samuel.baker@google.com'),
(46, 'Taylor Morris', 26, 'Intern', 'taylor.morris@google.com'),
(47, 'Uma Foster', 28, 'Software Engineer', 'uma.foster@google.com'),
(48, 'Victor Reed', 46, 'Technical Lead', 'victor.reed@google.com'),
(49, 'Willa Rogers', 31, 'HR Specialist', 'willa.rogers@google.com'),
(50, 'Xavier Scott', 50, 'Software Engineer', 'xavier.scott@google.com'),
(51, 'Yvonne Diaz', 29, 'Data Analyst', 'yvonne.diaz@google.com'),
(52, 'Zachary Young', 40, 'Software Engineer', 'zachary.young@google.com'),
(53, 'Amber Green', 33, 'QA Engineer', 'amber.green@google.com'),
(54, 'Blake Foster', 35, 'Product Manager', 'blake.foster@google.com'),
(55, 'Carmen Lee', 39, 'Business Analyst', 'carmen.lee@google.com'),
(56, 'Daniel Scott', 38, 'Marketing Specialist', 'daniel.scott@google.com'),
(57, 'Ella Wright', 41, 'Technical Lead', 'ella.wright@google.com'),
(58, 'Felix Adams', 42, 'Software Engineer', 'felix.adams@google.com'),
(59, 'Gina Perry', 37, 'Sales Manager', 'gina.perry@google.com'),
(60, 'Henry Clark', 43, 'Database Administrator', 'henry.clark@google.com'),
(61, 'Isabel Hall', 32, 'HR Specialist', 'isabel.hall@google.com'),
(62, 'Jack Nelson', 45, 'Security Analyst', 'jack.nelson@google.com'),
(63, 'Katie Evans', 34, 'UI/UX Designer', 'katie.evans@google.com'),
(64, 'Liam Rogers', 36, 'Support Engineer', 'liam.rogers@google.com'),
(65, 'Molly Baker', 31, 'Intern', 'molly.baker@google.com'),
(66, 'Nathan Diaz', 50, 'Network Administrator', 'nathan.diaz@google.com'),
(67, 'Olivia Foster', 28, 'Data Scientist', 'olivia.foster@google.com'),
(68, 'Paul Wright', 46, 'Project Manager', 'paul.wright@google.com'),
(69, 'Quincy Lee', 47, 'Software Engineer', 'quincy.lee@google.com"),
(70, 'Rita Young', 44, 'QA Engineer', 'rita.young@google.com');

INSERT INTO shift VALUES 
(4, 8, 'E1', 'Thursday', 1),
(5, 8, 'M1', 'Friday', 2),
(6, 8, 'E2', 'Saturday', 3),
(7, 4, 'D2', 'Sunday', 1),
(8, 2, 'D1', 'Monday', 1),
(9, 2, 'M2', 'Tuesday', 3);

