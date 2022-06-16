package hackathon.lunchgate;

import java.util.Map;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(using = RestaurantsSerializer.class)
public class Restaurants {

	public Map<String, Restaurant> restaurants;
	
}
