
get '/main' do
  erb :main
end

get '/result' do
  @game = Game.last
  @time = @game.time

  if @game.result == false
    @winner = @game.mario
    @lost =  @game.megaman
  else
    @winner = @game.megaman
    @lost =  @game.mario
  end
erb :result
end

post '/result' do
  @winner =  params[:playerWon]
  @game = Game.last
  @game.update_attributes(time: params[:time_win])
  if @winner == "player2"
    @game.update_attributes(result: true)
  else
    @game.update_attributes(result: false)
  end
   redirect to ("/result")
end