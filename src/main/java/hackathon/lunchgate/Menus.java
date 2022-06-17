package hackathon.lunchgate;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(using = MenuesSerializer.class)
public class Menus {
	
	public Map<String, Menu> menu;

}
