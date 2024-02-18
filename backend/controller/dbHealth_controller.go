package controller

import (
	"blog/middleware"
	"blog/model"
	"encoding/json"
	"log"
	"net/http"
)

func getDBHealth(w http.ResponseWriter, r *http.Request) error {
	db, err := middleware.DBNew()
	article := model.Article{}
	if err != nil {
		log.Printf("DBNew error %s", err)
		return err
	}
	err = db.QueryRow(`SELECT TITLE, BODY FROM ARTICLE WHERE ARTICLE_ID = $1`,
		1,
	).Scan(
		&article.Title,
		&article.ArticleID,
		&article.Body,
	)
	if err != nil {
		log.Printf("db.QueryRow error %s", err)
		return err
	}
	log.Printf("DB succeeded")
	result, err := json.Marshal(article)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return err
	}
	_, err = w.Write(result)
	if err != nil {
		return err
	}
	return nil
}
