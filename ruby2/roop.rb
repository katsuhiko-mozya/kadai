# fronzen_string_literal:true

require 'prime'
array = []

(1..100).each_with_index do |i, _j|
  prime = Prime.prime?(i)
  array.push({ id: i, prime: prime })
end

puts array
