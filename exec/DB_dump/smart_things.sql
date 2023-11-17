create table smart_things
(
    smart_things_id bigint auto_increment
        primary key,
    activation_path varchar(255) not null,
    device_id       varchar(255) not null,
    status          varchar(255) not null,
    user_object_id  bigint       not null,
    constraint FKe5ng2pyks908kf5m30hkj7m37
        foreign key (user_object_id) references user_objects (user_objcet_id)
);

INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (1, 'https://thingdong.com/resources/glb/things/curtain-open1.glb', '6e0eac14-6f36-4f7b-8d12-ea17b0673782', 'Y', 695);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (2, 'https://thingdong.com/resources/glb/things/lamp1.glb', 'f46e189b-d634-4a99-b37e-c2c4a6bc3af1', 'Y', 964);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (3, 'https://thingdong.com/resources/glb/things/curtain-open1.glb', '6e0eac14-6f36-4f7b-8d12-ea17b0673782', 'Y', 993);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (4, 'https://thingdong.com/resources/glb/things/lamp1.glb', 'f46e189b-d634-4a99-b37e-c2c4a6bc3af1', 'Y', 994);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (5, 'https://thingdong.com/resources/glb/things/switch-on1.glb', 'edccc0e5-238c-4030-9071-0360542cba26', 'N', 1326);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (6, 'https://thingdong.com/resources/glb/things/switch-on1.glb', 'edccc0e5-238c-4030-9071-0360542cba26', 'N', 1327);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (7, 'https://thingdong.com/resources/glb/things/switch-on1.glb', 'edccc0e5-238c-4030-9071-0360542cba26', 'N', 1328);
INSERT INTO ssafy_b304.smart_things (smart_things_id, activation_path, device_id, status, user_object_id) VALUES (8, 'https://thingdong.com/resources/glb/things/switch-on1.glb', 'edccc0e5-238c-4030-9071-0360542cba26', 'N', 1329);
