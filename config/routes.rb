Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :reviews, only: [:create, :update, :destroy]

  resources :cars, only: [:index, :create, :show]


  get "/me", to: "users#show"

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy" 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
