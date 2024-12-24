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
    (3, 'rabi', 7, 'janitor', 'sadjaksnd');
