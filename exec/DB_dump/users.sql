create table users
(
    user_id                       bigint auto_increment
        primary key,
    personal_authentication_token varchar(255) null,
    email                         varchar(255) not null,
    nickname                      varchar(255) not null,
    password                      varchar(255) not null,
    thing_amount                  bigint       null
);

create index idx_user_email
    on users (email);

INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (5, null, 'nyumnyum', '식은고구마', '$2a$10$7SGvcQ2Npjv63Eq.yi7EYetVCrFZFZ3iyFcCsIsV3QeMkn/z9ssnu', 54940);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (6, null, 'wjh1224', '재현', '$2a$10$0gq1MkxBWz1BMXaalht/0evfbyDwv3MTaSHwa2UjVQ5GxoH3jxBfu', 97970);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (7, null, 'cherry', '체리마루', '$2a$10$sTohrJ.GtYhZIzr.xDs1feIyLZPWaf2vlHlRSU2Jn4ope5oDnZETi', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (8, null, 'ymj0605', '굥윤', '$2a$10$wh2/XrO7M8wF5wGLg5aTiu5LjjySd4wca/S7/3FCphKy7YEJjIuV6', 500685);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (9, null, 'ssafy', '돌아온옥수수', '$2a$10$Fp47V.4Vd4AEezi.0BkVo.Y.Q3YJAxhM0D7cLkjB33ExqAlwzQo0C', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (10, null, 'ssafyyy', '돌아온옥수수', '$2a$10$ISpTYaCPdkjI76TpOmNKR.4fHEEfETTCN.ZW8pw/43KobI1Pn1tbO', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (11, null, 'hellowbbb', '식은옥수수', '$2a$10$733fivVNQN2J7iKBIIEYzeMTUVXngtlBJvdVCFR7owMek2up2GB5e', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (12, null, 'greentmt', '초록색토마토', '$2a$10$EC1pexki2HRFjBDiHMwDhu34eZXchtmn54V3StAzPapK.hq3zy6y6', 498920);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (13, null, 'cheese', '치즈그라탕', '$2a$10$EudW.xTRXy8nP4CFdV300./nEXgvLKAvHYb.txBWTOFGwOpj.ipEK', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (14, null, 'ssafy1', '돌아온 옥수수', '$2a$10$c0D1PyOCqfkiOlBYXiSurO3ff0YmIWd9FG/JK6GKacQxnHh7rMAum', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (15, null, 'cherrymaru', '진짜체리마루', '$2a$10$13r.0otjydqfoHPj4dBDlueojR3g7IbU0fp9CsbdEbaG/1dvgo1R6', 299997825);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (16, null, 'ssaf312y1', '돌아온 옥수수', '$2a$10$3rDOqq7prFliy3KnllNuf.kg/BksGjrF96k07WI8U7wY8Jp6U7RKq', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (17, null, 'minseo', '두민서', '$2a$10$aCd5aWMlNPWIma2tCmfkaOKroiW0ClVE5iG/n34xenaMAEIpwWiHe', 498485);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (18, null, 'potato', '포테이토	', '$2a$10$rMk5TuCpeQ..07KWeisbGOJL0wVh7lxs9m4ZCS1hcyY.tC7JnBhye', 100);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (19, null, 'undefined', '떵혀니', '$2a$10$WO7zAfs8kGkP.aW5KE4egupIrD7EnSZQsHPuaixY9ZfLCbB3ZHCFW', 999999275);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (20, null, 'wjh5296', '민진데용', '$2a$10$sbVoPdONNYHV7MHsn0YC4uCX9cqSj30bvV4FOh7KJ5SLmVqgAvkRS', 5000);
INSERT INTO ssafy_b304.users (user_id, personal_authentication_token, email, nickname, password, thing_amount) VALUES (21, null, 'angel', '엔젤리너스', '$2a$10$EcOjwH7gXxLJfuHOBL4ljuUSbQGX6rRnjKL/zoIMd3iaTRkhacJ8a', 100);
