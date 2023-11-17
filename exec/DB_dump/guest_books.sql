create table guest_books
(
    guest_book_id bigint auto_increment
        primary key,
    content       varchar(255) not null,
    write_day     date         null,
    owner_id      bigint       not null,
    writer_id     bigint       not null,
    constraint FK1gir3qh679s42ge0pl6ieuwnn
        foreign key (owner_id) references users (user_id),
    constraint FKsah223nq1sa8vv4ch9onkv98g
        foreign key (writer_id) references users (user_id)
);

create index idx_guestbook_owner_id
    on guest_books (owner_id);

INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (3, '진짜 체리마루야.... 넌 왜 전구가 있니...? ', '2023-11-13', 15, 12);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (9, '후회~~ 
하고있어요 ~~~ ', '2023-11-14', 6, 12);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (10, '오늘도 왔어 우하하 
', '2023-11-14', 15, 12);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (16, '안뇽', '2023-11-15', 15, 12);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (17, '안녕하세요 잘부탁드려요!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (18, 'A', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (19, '아는 형님의~ 아는 누님의~', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (20, '너 뭐 돼?', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (21, '형 화이팅', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (22, '메시 발롱 ㅊㅊ', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (23, '그 시절 바르샤', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (24, '그 시절 맨유', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (25, '내 생각엔 말이야', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (26, '펩보다는', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (27, '퍼거슨이', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (28, '나은거 같아', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (29, '손흥민 선수 사랑합니다!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (30, '이강인 선수 화이팅!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (31, '알 럽 김민재', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (32, '띵동 화이팅', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (33, '띵동 대박 나자!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (34, '띵동이 이 세상에 출시하는 그 날!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (35, 'velnourgo!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (36, '방명록', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (37, '방명록은 영어로? guestBook', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (38, '바 밤바
밤 밤맛나는
바 밤바', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (39, '죠 스바
스 윽 꺼내보니
바 밤바', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (40, '비 행기 타신 여러분 환영합니다
행 복한 여행 되십시오
기 내식은 바밤바', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (41, '비 비빅
비 비벼 먹는
빅 바밤바', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (42, '겨울날 눈이 오고 있었습니다', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (43, '그 날은 유독 추운 날이었죠', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (44, '너무 추워서 그만 저는 얼어버렸습니다', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (45, '그럼 나는 누구냐고?', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (46, '바밤바', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (47, '밤밤맨 바라바라 밤밤', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (48, '밤밤 바라바라 바라바라 밤 바라바라 밤 밤밤밤', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (49, 'Bomb Bomb Man', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (50, '스파이더맨', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (51, '날아라 슈퍼보드', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (52, '나는 하늘을 날아간다', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (53, '치키치키 차카차카 쵸코쵸코 쵸 나쁜짓을 하면은~', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (54, '갈비찜을 밥 위에 얹어 드세요~ 내가 세상에서 제일 좋아하는 건 아아아 아아아 덮밥', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (55, '오 대한민국 승리의 함성', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (56, '방명록을 작성해주세요.', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (57, '방명록을 작성해주세요.', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (58, '방명록을 작성해달라고', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (59, '방명록 대체 언제 작성하냐고', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (60, '지금 내 말 안들려?', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (61, '당장 작성하라고', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (62, '두 번 다시 말 안한다', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (63, '작성해 롸잇나우', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (64, '저는 말이죠', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (65, '어릴적 꿈이 있었습니다.', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (66, '근데 그것은', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (67, '비밀이랍니다~ 짜잔', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (68, '후후후', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (69, '호호 불면은', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (70, '구멍이 뚫리는', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (71, '커다란 솜사탕', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (72, '엄마 손잡고 나들이갈때', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (73, '사먹는 솜사탕', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (74, '아빠하고 불렀더니', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (75, '크레파스를', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (76, '동그랗게', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (77, '그린 얼굴~', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (78, '엄마!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (79, '아부지', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (80, '현재는 몇년도 일까요?', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (81, '후후후', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (82, '자 가자', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (83, '자 이제 시작이야 내 꿈을!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (84, '이게 바로 나', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (85, '꼬부랑 꼬부랑', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (86, '하하하하', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (87, '나는 살아있다.', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (88, '나는 전설이다.', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (89, '여기가 어딘지 아나?', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (90, '우리의 꿈과 희망이 묻힌 이곳', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (91, '나는 여기서 꿈과 희망을 되찾고 살아난다', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (92, '나는 슈퍼맨~!', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (93, '따단', '2023-11-15', 6, 8);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (94, '민재가 바닥에 떨어진 가오리 누나래
', '2023-11-16', 12, 19);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (95, '안녕하세여', '2023-11-16', 8, 17);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (96, '꽤 하는데?', '2023-11-16', 19, 12);
INSERT INTO ssafy_b304.guest_books (guest_book_id, content, write_day, owner_id, writer_id) VALUES (97, '오 방 괜찮은데~', '2023-11-16', 6, 15);
