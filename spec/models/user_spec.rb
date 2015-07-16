require 'rails_helper'

RSpec.describe User, type: :model do
  let(:no_username) { User.new(password: 'user', location: 'San Francisco, CA') }
  let(:no_password) { User.new(username: 'user', location: 'San Francisco, CA') }
  let(:short_password) { User.new(username: 'user', password: '123', location: 'San Francisco, CA') }
  let(:no_location) { User.new(username: 'user', password: '123') }
  let(:valid_user) { User.new(username: 'user', password: 'foobar', location: 'San Francisco, CA') }

  it 'validates presence of username' do
    expect(no_username).not_to be_valid
  end

  it 'validates presence of password' do
    expect(no_password).not_to be_valid
  end

  it 'validates presence of location' do
    expect(no_password).not_to be_valid
  end

  it 'validates length of password' do
    expect(short_password).not_to be_valid
  end

  it 'saves valid user' do
    expect(valid_user).to be_valid
  end
end
