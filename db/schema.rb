# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150625051051) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followed_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "follows", ["followed_id"], name: "index_follows_on_followed_id", using: :btree
  add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "track_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["user_id", "track_id"], name: "index_likes_on_user_id_and_track_id", unique: true, using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "uploader_id", null: false
    t.string   "source",      null: false
    t.string   "image"
  end

  add_index "tracks", ["uploader_id"], name: "index_tracks_on_uploader_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image"
    t.string   "location",        null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
