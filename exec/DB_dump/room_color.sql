create table room_color
(
    room_color      varchar(255) not null
        primary key,
    room_model_path varchar(255) not null
);

INSERT INTO ssafy_b304.room_color (room_color, room_model_path) VALUES ('black', 'https://thingdong.com/resources/glb/room/room_black.glb');
INSERT INTO ssafy_b304.room_color (room_color, room_model_path) VALUES ('green', 'https://thingdong.com/resources/glb/room/room_green.glb');
INSERT INTO ssafy_b304.room_color (room_color, room_model_path) VALUES ('pink', 'https://thingdong.com/resources/glb/room/room-pink.glb');
INSERT INTO ssafy_b304.room_color (room_color, room_model_path) VALUES ('purple', 'https://thingdong.com/resources/glb/room/room-puple.glb');
INSERT INTO ssafy_b304.room_color (room_color, room_model_path) VALUES ('white', 'https://thingdong.com/resources/glb/room/room-white.glb');
INSERT INTO ssafy_b304.room_color (room_color, room_model_path) VALUES ('yellow', 'https://thingdong.com/resources/glb/room/room_yellow.glb');
