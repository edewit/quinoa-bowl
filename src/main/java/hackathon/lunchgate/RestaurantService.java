package hackathon.lunchgate;

import java.util.Base64;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.jboss.resteasy.reactive.RestQuery;

@Path("/restaurant")
@RegisterRestClient(configKey = "lunchgate-api")
@ClientHeaderParam(name = "Authorization", value = "{lookupAuth}")
public interface RestaurantService {

    default String lookupAuth() {
        return "Basic " + Base64.getEncoder().encodeToString("api.demo@lunchgate.ch:demo".getBytes());
    }

    @GET
    @Path("list")
    Restaurants list(@RestQuery String city, @RestQuery String country, @RestQuery String language, @RestQuery String response, @RestQuery String latitude, @RestQuery String longitude);

    @GET
    @Path("menu")
    Object menu(@RestQuery String restaurant_id, @RestQuery String url_name, @RestQuery String day, @RestQuery String limit, @RestQuery String days, @RestQuery String response);
}
