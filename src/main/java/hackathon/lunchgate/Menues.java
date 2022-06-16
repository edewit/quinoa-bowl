package hackathon.lunchgate;

import java.util.Map;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(using = MenuesSerializer.class)
public class Menues {

	public Map<String, Menu> menues;
	
}
