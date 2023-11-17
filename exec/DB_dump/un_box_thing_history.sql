create table un_box_thing_history
(
    unboxthing_history_id bigint auto_increment
        primary key,
    object_name           varchar(255) not null,
    purchase_day          date         null,
    object_id             bigint       not null,
    user_id               bigint       not null,
    constraint FKbtth18kk974p3jj070tv8ir2b
        foreign key (user_id) references users (user_id),
    constraint FKl1wqehgwn4do7iwixgqljwfa8
        foreign key (object_id) references objects (object_id)
);

create index idx_unboxthinghistory_user_id
    on un_box_thing_history (user_id);

INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (1, '축구화', '2023-11-14', 70, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (2, '빨간 장미', '2023-11-14', 71, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (3, '분홍색 튤립', '2023-11-14', 72, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (4, '러버덕', '2023-11-14', 73, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (5, '축구공', '2023-11-14', 74, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (6, '원재현동상', '2023-11-14', 75, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (7, '공룡', '2023-11-14', 76, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (8, '장미꽃', '2023-11-14', 77, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (9, '국화꽃', '2023-11-14', 78, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (10, '선물상자', '2023-11-14', 79, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (11, '강아지', '2023-11-14', 80, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (12, '고양이', '2023-11-14', 81, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (13, '커피 컵', '2023-11-14', 82, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (14, '가오리', '2023-11-14', 83, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (15, '가오리', '2023-11-14', 84, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (16, '꿀벌', '2023-11-14', 85, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (17, '말벌', '2023-11-14', 86, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (18, '전구', '2023-11-14', 87, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (19, '키보드', '2023-11-14', 88, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (20, '꽃', '2023-11-14', 89, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (21, '물', '2023-11-14', 90, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (22, '불', '2023-11-14', 91, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (23, '낙엽', '2023-11-14', 92, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (24, '벚꽃', '2023-11-14', 93, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (25, '달', '2023-11-14', 94, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (26, '태양', '2023-11-14', 95, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (27, '소나기', '2023-11-14', 96, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (28, '커튼', '2023-11-14', 97, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (29, '장갑', '2023-11-14', 98, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (30, '오리', '2023-11-14', 99, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (31, '아이스크림', '2023-11-14', 100, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (32, '침대', '2023-11-14', 101, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (33, '소파', '2023-11-14', 102, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (34, '아디다스 신발', '2023-11-14', 103, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (35, '아디다스 신발', '2023-11-14', 104, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (36, '사탕', '2023-11-14', 105, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (37, '마우스', '2023-11-14', 106, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (38, 'ㅋ', '2023-11-14', 107, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (39, '빼뺴로', '2023-11-14', 108, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (40, '도라에몽', '2023-11-14', 109, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (41, 'crayon shinchan', '2023-11-14', 110, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (42, 'ㄴㅇ', '2023-11-14', 111, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (43, '장미', '2023-11-14', 112, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (44, '검정색 자동차', '2023-11-14', 113, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (45, '다이아 반지', '2023-11-14', 114, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (46, '생일 케이크', '2023-11-14', 115, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (47, '생일 케이크', '2023-11-14', 116, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (48, '국화꽃', '2023-11-14', 117, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (49, '오렌지', '2023-11-14', 118, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (50, '축구공', '2023-11-14', 119, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (51, '감자', '2023-11-14', 120, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (52, '수박', '2023-11-14', 121, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (53, '안경', '2023-11-14', 122, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (54, '선인장', '2023-11-14', 123, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (55, '기타', '2023-11-14', 124, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (56, '와인잔', '2023-11-14', 125, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (57, '사과', '2023-11-14', 126, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (58, '눈사람', '2023-11-14', 127, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (59, '약과', '2023-11-14', 128, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (60, '지갑', '2023-11-14', 129, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (61, '사과', '2023-11-14', 130, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (62, '빨간색 람보르기니 자동차', '2023-11-15', 131, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (63, '커스텀키보드', '2023-11-15', 132, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (64, 'key cap', '2023-11-15', 133, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (65, '5tfgd', '2023-11-15', 134, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (66, 'dragon ball', '2023-11-15', 135, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (67, '오메가몬', '2023-11-15', 136, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (68, '담배', '2023-11-15', 137, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (69, '여자친구', '2023-11-15', 138, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (70, '광안대교', '2023-11-15', 139, 8);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (71, '귀여운 곰인형', '2023-11-15', 140, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (72, '분홍색 그라데이션 튤립 꽃다발', '2023-11-15', 141, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (73, '파란색 반짝이는 포르쉐', '2023-11-15', 142, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (74, '귀여운 포차코', '2023-11-16', 143, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (75, '구름 조명', '2023-11-16', 144, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (76, '딸기 생크림 케이크', '2023-11-16', 145, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (77, '키보드', '2023-11-16', 146, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (78, '아이폰', '2023-11-16', 147, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (79, '크리스마스트리', '2023-11-16', 148, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (80, 'exit()', '2023-11-16', 149, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (81, '이글루', '2023-11-16', 150, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (82, '펭귄', '2023-11-16', 151, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (83, '큰 크리스마스 트리', '2023-11-16', 152, 19);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (84, '고양이', '2023-11-16', 153, 12);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (85, '띵호와', '2023-11-16', 154, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (86, '화난 개', '2023-11-16', 155, 12);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (87, '토끼', '2023-11-16', 156, 12);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (88, '한성현', '2023-11-16', 157, 12);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (89, '쓰레기', '2023-11-16', 158, 12);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (90, '로봇', '2023-11-16', 159, 6);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (91, '벚꽃', '2023-11-16', 160, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (92, '빨간 람보르기니 자동차', '2023-11-16', 162, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (93, '라쿤', '2023-11-16', 163, 15);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (94, '멋있는 빨간 람보르기니 자동차', '2023-11-16', 164, 17);
INSERT INTO ssafy_b304.un_box_thing_history (unboxthing_history_id, object_name, purchase_day, object_id, user_id) VALUES (95, '멋있는 빨간 람보르기니 자동차', '2023-11-16', 165, 17);
