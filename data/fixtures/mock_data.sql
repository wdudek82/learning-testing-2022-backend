SELECT u1.name as author, u2.name as assignee, t.id as ticketId, t.title FROM tickets t
                                                                                  LEFT JOIN users u2 on u2.id = t."authorId"
                                                                                  LEFT JOIN users u1 on u1.id = t."assigneeId";

-- users
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('johndoe@testing.com', 'John Doe', 'admin123', 'user', DATE('now'), DATE('now'), null);
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('pieter.hollenbeck@testing.com', 'Pieter Hollenbeck', 'passwd123', 'user', DATE('now'), DATE('now'), null);
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('joostvanhoof@testing.com', 'Joost van Hoof', 'verydifficultpasswd', 'admin', DATE('now'), DATE('now'), null);
INSERT INTO users (email, name, password, role, created_at, updated_at, deleted_at) VALUES ('romankowalski@testing.com', 'Roman Maria Kowalki', 'dupa123', 'admin', DATE('now'), DATE('now'), null);

-- tickets
INSERT INTO tickets (title, description, priority, status, created_at, updated_at, deleted_at, "relatedTicketId", "authorId", "assigneeId") VALUES ('A Bug', 'This is a bug report', 'low', 'design', DATE('now'), DATE('now'), null, null, 1, null);
INSERT INTO tickets (title, description, created_at, updated_at, deleted_at, "relatedTicketId", "authorId", "assigneeId") VALUES ('Next bug', 'This is a new bug', DATE('now'), DATE('now'), null, null, 2, 2);
INSERT INTO tickets (title, description, created_at, updated_at, deleted_at, "relatedTicketId", "authorId", "assigneeId") VALUES ('Button is not working', 'When button is clicked, nothing happens.', DATE('now'), DATE('now'), null, null, 3, 2);

-- comments
INSERT INTO comments ("ticketId", content, "authorId") VALUES (1, 'It''s a feature not a bug...', 1);
INSERT INTO comments ("ticketId", content, "authorId") VALUES (1, 'Then we have to change this "feature".', 3);
INSERT INTO comments ("ticketId", content, "authorId") VALUES (2, 'It''s working on my machine.', 2);
