post '/login' do
  @player_one = Player.authenticate(params[:mario])
  @player_two = Player.authenticate(params[:megaman])

  if @player_one != nil && @player_two != nil
    Game.create(mario: @player_one.name, megaman: @player_two.name)
    @current_game = Game.last
    session[:id] =  @current_game.id
    redirect to("/main")
  else
    redirect to ("/")
  end
end

