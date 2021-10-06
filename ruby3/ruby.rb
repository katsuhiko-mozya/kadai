# fronzen_string_literal:true
require 'prime'
array = []
n_array=["a","b","c","d","e"]

(1..5).each do |i|
  array.push({ id: i, name: n_array[i-1] })
end

puts array