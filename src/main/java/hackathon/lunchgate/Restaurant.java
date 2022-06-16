package hackathon.lunchgate;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Restaurant {

	public int id;
	public String realName;
	public String homepage;
	public String phone;
}
