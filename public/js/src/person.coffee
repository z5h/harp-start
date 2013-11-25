class Person
  constructor: (@firstName, @lastName) ->

  fullName: () ->
    "#{@firstName} #{@lastName}"