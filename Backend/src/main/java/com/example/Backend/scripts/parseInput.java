package com.example.Backend.scripts;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

public class parseInput {

  private HashMap<Integer, String> calls;
  private List<String> classes;
  private List<int[]> ages;
  private String gender;
  private List<String> races;

  private String str = "Key:1; class:[], gender:[], age:[0-29]; race:[Asian]; Key:1; class:[], gender:[], age:[31-120]; race:[White]";
  private String str2 = "Key:1; class:[lower], gender:[], age:[10-29;30-120], race:[Asian]";

  parseInput(String inputString) {
    this.calls = new HashMap<>();
    calls.put(1, "/getAge");
    calls.put(2, "/getClass");
    calls.put(3, "/getRace");
    parseInputString(inputString);
  }

  public void parseInputString(String str) {

    int key = -1;
    while (str.length() > 0 && str.charAt(0) != ';') {
      System.out.println(str);
      System.out.println();

      str = str.substring(4);
      key = Character.getNumericValue(str.charAt(0));
      str = str.substring(str.indexOf('['));

      this.classes = parseStrings(str);
      str = str.substring(str.indexOf(']'));
      str = str.substring(str.indexOf('['));

      this.gender = str.substring(str.indexOf('[') + 1, str.indexOf(']'));
      str = str.substring(str.indexOf(']'));
      str = str.substring(str.indexOf('['));

      this.ages = parseAges(str);

      str = str.substring(str.indexOf(']'));
      str = str.substring(str.indexOf('['));

      this.races = parseStrings(str);

      if (str.indexOf(';') > 0) {
        str = str.substring(str.indexOf(';') + 1);
      } else {
        str = "";
      }

      String apiCall = key > 0 ? this.calls.get(key) : null;
      String params = buildParams(classes, gender, ages, races);

      System.out.println(apiCall);
      System.out.println(params);
    }
  }

  private String buildParams(List<String> classes, String gender, List<int[]> ages, List<String> races) {
    StringBuilder params = new StringBuilder();

    if (!classes.isEmpty()) {
      params.append("class=").append(String.join(",", classes)).append("&");
    }

    if (!gender.isEmpty()) {
      params.append("gender=").append(String.join(",", gender)).append("&");
    }

    if (!ages.isEmpty()) {
      List<String> ageRanges = new ArrayList<>();
      for (int[] age : ages) {
        ageRanges.add(age[0] + "-" + age[1]);
      }
      params.append("age=").append(String.join(";", ageRanges)).append("&");
    }

    if (!races.isEmpty()) {
      params.append("race=").append(String.join(",", races));
    }

    // Remove trailing '&' if present
    if (params.length() > 0 && params.charAt(params.length() - 1) == '&') {
      params.setLength(params.length() - 1);
    }

    return params.toString();
  }

  public static List<String> parseStrings(String str) {
    List<String> res = new ArrayList<>();

    // Ensure the string starts with '['
    if (str.length() == 0 || str.charAt(0) != '[') {
      return res;
    }

    // Remove the opening bracket
    str = str.substring(1);

    while (str.length() > 0 && str.charAt(0) != ']') {
      StringBuilder token = new StringBuilder();

      // Read until you hit a comma or the closing bracket
      while (str.length() > 0 && str.charAt(0) != ',' && str.charAt(0) != ']') {
        token.append(str.charAt(0));
        str = str.substring(1);
      }

      // Trim any leading/trailing whitespace and add the token to the result list
      res.add(token.toString().trim());

      // If the next character is a comma, skip it
      if (str.length() > 0 && str.charAt(0) == ',') {
        str = str.substring(1);
      }

    }

    return res;
  }

  public static List<int[]> parseAges(String str) {
    List<int[]> res = new ArrayList<>();

    // Ensure the string starts with '['
    if (str.length() == 0 || str.charAt(0) != '[') {
      return res;
    }

    // Remove the opening bracket
    str = str.substring(1);

    // Read until you hit a comma or the closing bracket
    while (str.length() > 0 && str.charAt(0) != ';' && str.charAt(0) != ']') {
      int[] range = new int[2];

      range[0] = Integer.parseInt(str.substring(0, str.indexOf('-')));
      int stopIndex = str.indexOf(']');
      int commaIndex = str.indexOf(';');
      if (commaIndex > 0 && commaIndex < stopIndex) {
        stopIndex = commaIndex;
      }
      range[1] = Integer.parseInt(str.substring(str.indexOf('-') + 1, stopIndex));

      res.add(range);

      str = str.substring(stopIndex);

      // If the next character is a comma, skip it
      if (str.length() > 0 && str.charAt(0) == ';') {
        str = str.substring(1);
      }
    }

    return res;
  }

  public static void main(String[] args) {
    String str2 = "Key:1; class:[], gender:[], age:[0-29]; race:[Asian]; Key:1; class:[], gender:[], age:[31-120]; race:[White]";
    String str = "Key:1; class:[lower], gender:[], age:[10-29;30-120], race:[Asian]";

    // Create an instance of parseInput with the input string
    parseInput parser = new parseInput(str);

  }
}
