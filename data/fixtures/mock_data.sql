-- remove all old records
DELETE FROM users;
DELETE FROM tickets;
DELETE FROM comments;

-- reset all sequences
ALTER SEQUENCE users_id_seq RESTART;
ALTER SEQUENCE tickets_id_seq RESTART;
ALTER SEQUENCE comments_id_seq RESTART;

-- users
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('johndoe@testing.com', 'John Doe', '3a34ebe9037e9e47.98d5462c42ed89fcc2c739edb646f3ac0318f066dbf94fab20c6e061591d3f73', 'user', DATE('now'), DATE('now'), null);
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('pieter.hollenbeck@testing.com', 'Pieter Hollenbeck', '3a34ebe9037e9e47.98d5462c42ed89fcc2c739edb646f3ac0318f066dbf94fab20c6e061591d3f73', 'user', DATE('now'), DATE('now'), null);
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('joostvanhoof@testing.com', 'Joost van Hoof', '3a34ebe9037e9e47.98d5462c42ed89fcc2c739edb646f3ac0318f066dbf94fab20c6e061591d3f73', 'admin', DATE('now'), DATE('now'), null);
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('romankowalski@testing.com', 'Roman Maria Kowalki', '3a34ebe9037e9e47.98d5462c42ed89fcc2c739edb646f3ac0318f066dbf94fab20c6e061591d3f73', 'admin', DATE('now'), DATE('now'), null);

-- tickets
INSERT INTO tickets (title, description, priority, status, created_at, updated_at, "relatedTicketId", "authorId", "assigneeId") VALUES ('A Bug', 'This is a bug report', 'low', 'to_do', DATE('now'), DATE('now'), null, 1, null);
INSERT INTO tickets (title, description, created_at, updated_at, "relatedTicketId", "authorId", "assigneeId") VALUES ('Next bug', 'This is a new bug', DATE('now'), DATE('now'), null, 2, 2);
INSERT INTO tickets (title, description, created_at, updated_at, "relatedTicketId", "authorId", "assigneeId") VALUES ('Button is not working', 'When button is clicked, nothing happens.', DATE('now'), DATE('now'), null, 3, 2);

-- comments
INSERT INTO comments ("ticketId", content, "authorId") VALUES (1, 'It''s a feature not a bug...', 1);
INSERT INTO comments ("ticketId", content, "authorId") VALUES (1, 'Then we have to change this "feature".', 3);
INSERT INTO comments ("ticketId", content, "authorId") VALUES (2, 'It''s working on my machine.', 2);

