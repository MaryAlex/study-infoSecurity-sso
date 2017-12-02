-- Type for Flats
insert into sso.type (id, belonging, name) values (1, 1, "VIP"), (2, 1, "Business"), (3, 1, "Comfort");
-- Type for Computer
insert into sso.type (id, belonging, name) values (4, 0, "Gaming"), (5, 0, "Working"), (6, 0, "Home");
-- Type for Motorcycle
insert into sso.type (id, belonging, name) values (7, 2, "Dirt"), (8, 2, "Road"), (9, 2, "Tour");

-- Computer for Gaming
insert into sso.computer (id, firm, model, battery, processor, type_id) values (1, "Asus", "Strix GL502VM-FY192T", "2800 MGz", "intel Core i7", 4), (2, "Lenovo", "Legion Y520-15", "2800 MGz", "intel Core i7", 4);
-- Computer for Working
insert into sso.computer (id, firm, model, battery, processor, type_id) values (3, "HP", "250 G6", "1600 MGz", "Intel Celeron N3060", 5), (4, "Lenovo", "V110-15IAP", "1100 MGz", "Intel Celeron N3060", 5);
-- Computer for Home
insert into sso.computer (id, firm, model, battery, processor, type_id) values (5, "HP", "ENVY 15-k250ur", "2200 MGz", "intel Core i5", 6), (6, "Lenovo", "IdeaPad 700-15ISK", "2300 MGz", "Intel Celeron N3060", 6);

-- Flat for VIP
insert into sso.flat (id, number_of_rooms, square, description, type_id) values (1, 4, 80, "Awesome", 1), (2, 5, 90, "More Awesome", 1);
-- Flat for Business
insert into sso.flat (id, number_of_rooms, square, description, type_id) values (3, 3, 60, "So so", 2), (4, 2, 50, "So so so", 2);
-- Flat for Comfort
insert into sso.flat (id, number_of_rooms, square, description, type_id) values (5, 2, 45, "Crap", 3), (6, 1, 35, "Not crap but still awefull", 3);

-- Motorcycle for Dirt
insert into sso.motorcycle (id,  firm, model, width, height, displacement, type_id) values (1, "Yamaha", "Model1", 210, 160, "250cc", 7), (2, "Honda", "Model2", 220, 150, "230cc", 7);
-- Motorcycle for Road
insert into sso.motorcycle (id,  firm, model, width, height, displacement, type_id) values (3, "Yamaha", "Model3", 200, 165, "220cc", 8), (4, "Honda", "Model4", 225, 153, "238cc", 8);
-- Motorcycle for Tour
insert into sso.motorcycle (id,  firm, model, width, height, displacement, type_id) values (5, "Yamaha", "Model5", 200, 165, "220cc", 9), (6, "Honda", "Model6", 225, 153, "238cc", 9);

-- Roles
insert into sso.role (id, name) values (1, "Admin"), (2, "SuperUser"), (3, "User");

-- CRUD for Admin
insert into sso.typeCRUD (id, type_id, role_id, create_Access, read_Access, update_Access, delete_Access) values (1, 1, 1, TRUE, TRUE, TRUE, TRUE), (2, 2, 1, TRUE, TRUE, TRUE, TRUE), (3, 3, 1, TRUE, TRUE, TRUE, TRUE), (4, 4, 1, TRUE, TRUE, TRUE, TRUE),
(5, 5, 1, TRUE, TRUE, TRUE, TRUE), (6, 6, 1, TRUE, TRUE, TRUE, TRUE), (7, 7, 1, TRUE, TRUE, TRUE, TRUE), (8, 8, 1, TRUE, TRUE, TRUE, TRUE), (9, 9, 1, TRUE, TRUE, TRUE, TRUE);
-- CRUD for User
insert into sso.typeCRUD (id, type_id, role_id, create_Access, read_Access, update_Access, delete_Access) values (10, 1, 3, FALSE, TRUE, FALSE, FALSE), (11, 2, 3, FALSE, TRUE, FALSE, FALSE), (12, 3, 3, TRUE, TRUE, FALSE, FALSE), (13, 4, 3, TRUE, TRUE, FALSE, FALSE),
(14, 5, 3, TRUE, TRUE, FALSE, FALSE), (15, 6, 3, TRUE, TRUE, FALSE, FALSE), (16, 7, 3, TRUE, TRUE, FALSE, FALSE), (17, 8, 3, TRUE, TRUE, FALSE, FALSE), (18, 9, 3, TRUE, TRUE, FALSE, FALSE);
-- CRUD for SuperUser
insert into sso.typeCRUD (id, type_id, role_id, create_Access, read_Access, update_Access, delete_Access) values (19, 1, 2, TRUE, TRUE, TRUE, FALSE), (20, 2, 2, TRUE, TRUE, TRUE, FALSE), (21, 3, 2, TRUE, TRUE, TRUE, FALSE), (22, 4, 2, TRUE, TRUE, TRUE, FALSE),
(23, 5, 2, TRUE, TRUE, TRUE, FALSE), (24, 6, 2, TRUE, TRUE, TRUE, FALSE), (25, 7, 2, TRUE, TRUE, TRUE, FALSE), (26, 8, 2, TRUE, TRUE, TRUE, FALSE), (27, 9, 2, TRUE, TRUE, TRUE, FALSE);

-- Admin user
insert into sso.user (id, username, password) values (1, "admin", "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
insert into sso.user_role (user_id, role_id) values (1, 1);
-- SuperUser
insert into sso.user (id, username, password) values (2, "super", "73d1b1b1bc1dabfb97f216d897b7968e44b06457920f00f2dc6c1ed3be25ad4c");
insert into sso.user_role (user_id, role_id) values (2, 2);
-- User
insert into sso.user (id, username, password) values (3, "user", "04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb");
insert into sso.user_role (user_id, role_id) values (3, 3);
