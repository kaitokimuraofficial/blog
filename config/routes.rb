Rails.application.routes.draw do
  get '/' => 'public/home#index', as: :root
  
end
