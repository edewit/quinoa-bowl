package hackathon.lunchgate;

import java.util.Map;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@JsonSerialize(using = RestaurantSerializer.class)
public class Restaurant {

	public int id;
	public String realName;
	public String homepage;
	public String phone;
	public Map<String, Menu> menu;
}
