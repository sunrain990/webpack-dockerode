/**
 * Created by kevin on 17/3/22.
 */
'use strict';

// Credits: borrowed code from fcomb/redux-logger

function createLogger() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$collapsed = _ref.collapsed;
    var collapsed = _ref$collapsed === undefined ? true : _ref$collapsed;
    var _ref$transformer = _ref.transformer;
    var transformer = _ref$transformer === undefined ? function (state) {
        return state;
    } : _ref$transformer;
    var _ref$mutationTransfor = _ref.mutationTransformer;
    var mutationTransformer = _ref$mutationTransfor === undefined ? function (mut) {
        return mut;
    } : _ref$mutationTransfor;

    return {
        snapshot: true,
        onMutation: function onMutation(mutation, nextState, prevState) {
            if (typeof console === 'undefined') {
                return;
            }
            var time = new Date();
            var formattedTime = ' @ ' + pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
            var formattedMutation = mutationTransformer(mutation);
            var message = 'mutation ' + mutation.type + formattedTime;
            var startMessage = collapsed ? console.groupCollapsed : console.group;

            // render
            try {
                startMessage.call(console, message);
            } catch (e) {
                console.log(message);
            }

            console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
            console.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
            console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

            try {
                console.groupEnd();
            } catch (e) {
                console.log('—— log end ——');
            }
        }
    };
}

function repeat(str, times) {
    return new Array(times + 1).join(str);
}

function pad(num, maxLength) {
    return repeat('0', maxLength - num.toString().length) + num;
}

module.exports = createLogger;