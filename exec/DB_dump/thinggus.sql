create table thinggus
(
    thinggu_id     bigint       not null,
    user_id        bigint       not null,
    thinggu_status varchar(255) not null,
    primary key (thinggu_id, user_id),
    constraint FK22heqfuu2sft92tl24pxsa7ep
        foreign key (thinggu_id) references users (user_id),
    constraint FK9xbnktcvd2uxuqgbko4unfgrd
        foreign key (user_id) references users (user_id)
);

INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (5, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (6, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (6, 12, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (6, 15, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (7, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 5, 'N');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 6, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 7, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 9, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 12, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 13, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 14, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 15, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 17, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 18, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (8, 19, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (9, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (12, 6, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (12, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (12, 15, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (12, 17, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (12, 19, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (13, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (14, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (15, 6, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (15, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (15, 12, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (15, 16, 'N');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (15, 17, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (15, 19, 'N');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (17, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (17, 12, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (17, 15, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (18, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (19, 8, 'Y');
INSERT INTO ssafy_b304.thinggus (thinggu_id, user_id, thinggu_status) VALUES (19, 12, 'Y');
