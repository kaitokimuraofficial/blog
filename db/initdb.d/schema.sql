DROP TABLE IF EXISTS article;

CREATE TABLE article
(
    `ArticleID`                       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'article_ID',
    `CreatedAt`               TIMESTAMP NOT NULL default current_timestamp COMMENT 'レコード作成日時',
    `UpdatedAt`               TIMESTAMP NOT NULL default current_timestamp on update current_timestamp COMMENT 'レコード修正日時',
    `Title`              VARCHAR(50) NOT NULL COMMENT 'タイトル',
    `Body`      VARCHAR(400) NOT NULL COMMENT '内容',
    PRIMARY  KEY (`ArticleID`),
    UNIQUE   KEY `uk_article_title` (`Title`) USING BTREE
);

INSERT INTO article (Title, Body) VALUES ("初投稿", "初めて投稿します。\nこれからがんばります。I can do this! ");
INSERT INTO article (Title, Body) VALUES ("二つ目の記事", "二つ目の記事。");
