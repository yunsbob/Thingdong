create table user_rooms
(
    room_id    bigint auto_increment
        primary key,
    user_id    bigint       not null,
    room_color varchar(255) not null,
    constraint FKgimgejqwh2hrne3smwmi7mqqg
        foreign key (room_color) references room_color (room_color),
    constraint FKlp3u9gpy3sne8ibijkmvnukin
        foreign key (user_id) references users (user_id)
);

create index idx_userroom_user_id
    on user_rooms (user_id);

INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (5, 5, 'black', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (6, 6, 'white', 'Y');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (7, 7, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (8, 8, 'purple', 'Y');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (9, 9, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (10, 10, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (11, 11, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (12, 12, 'pink', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (13, 13, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (14, 14, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (15, 15, 'green', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (16, 16, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (17, 17, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (18, 18, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (19, 19, 'white', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (20, 20, 'yellow', 'N');
INSERT INTO ssafy_b304.user_rooms (room_id, user_id, room_color, dark_mode) VALUES (21, 21, 'yellow', 'N');
