class Player < ActiveRecord::Base
    def self.authenticate(name)
     player =  Player.find_by_name(name)
     if player.nil? == false
       return player
     else
       return nil
     end
    end
end
