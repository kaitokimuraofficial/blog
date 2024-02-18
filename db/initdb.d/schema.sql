DROP TABLE IF EXISTS article;

CREATE TABLE article
(
    `article_id`                       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'article_ID',
    `created_at`               TIMESTAMP NOT NULL default current_timestamp COMMENT 'レコード作成日時',
    `updated_at`               TIMESTAMP NOT NULL default current_timestamp on update current_timestamp COMMENT 'レコード修正日時',
    `title`              VARCHAR(50) NOT NULL COMMENT 'タイトル',
    `body`      VARCHAR(400) NOT NULL COMMENT '内容',
    PRIMARY  KEY (`article_id`),
    UNIQUE   KEY `uk_article_title` (`title`) USING BTREE
);

INSERT INTO article (title, body) VALUES ("初投稿", "初めて投稿します。\nこれからがんばります。I can do this! ");
INSERT INTO article (title, body) VALUES ("二つ目の記事", "二つ目の記事。");
