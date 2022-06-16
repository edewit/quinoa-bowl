
package org.acme.entities.response;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.processing.Generated;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "notices"
})
@Generated("jsonschema2pojo")
public class Root {

    @JsonProperty("restaurants")
    private Restaurants restaurants;
}