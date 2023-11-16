create table user_roles
(
    user_user_id bigint       not null,
    roles        varchar(255) null,
    constraint FK5gikiw021w6y16a8t5vjwqwyj
        foreign key (user_user_id) references users (user_id)
);

INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (5, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (6, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (7, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (8, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (9, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (10, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (11, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (12, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (13, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (14, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (15, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (16, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (17, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (18, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (19, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (20, 'ROLE_USER');
INSERT INTO ssafy_b304.user_roles (user_user_id, roles) VALUES (21, 'ROLE_USER');
